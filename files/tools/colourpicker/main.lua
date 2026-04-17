love.window.setTitle("Colour picker thingy")

local boardW, boardH = 700, 400
local colorH = 300
local grayH = boardH - colorH

local boardImageData
local boardImage

local pickedHex = "#FFFFFF"
local boardX, boardY = 0, 0

local markerX, markerY = nil, nil

local function rgbToHex(r, g, b)
    return string.format("#%02X%02X%02X",
        math.floor(r * 255 + 0.5),
        math.floor(g * 255 + 0.5),
        math.floor(b * 255 + 0.5)
    )
end

local function centerBoard()
    local windowW, windowH = love.graphics.getDimensions()
    boardX = (windowW - boardW) / 2
    boardY = (windowH - boardH) / 2
end

function love.load()
    centerBoard()

    boardImageData = love.image.newImageData(boardW, boardH)

    for y = 0, colorH - 1 do
        for x = 0, boardW - 1 do
            local nx = x / (boardW - 1)
            local ny = y / (colorH - 1)

            local r = nx
            local g = ny
            local b = 1 - nx * 0.5

            boardImageData:setPixel(x, y, r, g, b, 1)
        end
    end

    for y = colorH, boardH - 1 do
        local v = (y - colorH) / math.max(grayH - 1, 1)
        for x = 0, boardW - 1 do
            boardImageData:setPixel(x, y, v, v, v, 1)
        end
    end

    boardImage = love.graphics.newImage(boardImageData)
end

function love.resize(w, h)
    centerBoard()
end

function love.mousepressed(x, y, button)
    if button ~= 1 then return end

    local bx = x - boardX
    local by = y - boardY

    if bx >= 0 and bx < boardW and by >= 0 and by < boardH then
        local r, g, b = boardImageData:getPixel(bx, by)
        pickedHex = rgbToHex(r, g, b)
        love.system.setClipboardText(pickedHex)
        markerX, markerY = bx, by
    end
end

function love.draw()
    love.graphics.setColor(1, 1, 1)
    love.graphics.draw(boardImage, boardX, boardY)
    love.graphics.rectangle("line", boardX, boardY, boardW, boardH)

    if markerX and markerY then
        love.graphics.setColor(1, 1, 1)
        love.graphics.circle("line", boardX + markerX, boardY + markerY, 8)
        love.graphics.circle("fill", boardX + markerX, boardY + markerY, 2)
    end

    love.graphics.setColor(1, 1, 1)
    love.graphics.print("Click the gradient or gray strip", boardX, boardY + boardH + 15)
    love.graphics.print("Hex: " .. pickedHex, boardX, boardY + boardH + 35)
end
