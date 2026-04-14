function printable(prntxt) {
  const content = prntxt.nextElementSibling.innerHTML;
  const win = window.open("", "_blank");

  win.document.open();
  win.document.write(`
    <html>
      <head>
        <title>Εκτυπώσιμο</title>
        <style>
          body{
            padding: 2%;
            font-family: 'Times New Roman', Times, serif;
          }
          table{
          width:100%
          }
          th,td{
            border: black 2px solid;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  win.document.close();

  win.focus();
  win.print();
}