import jsPDF from "jspdf";

import "jspdf-autotable";


const generatePDF = (report,specialization,schemeType,marks) => {

  // initialize jsPDF

  const doc = new jsPDF();

  const spec = specialization;
  const Type = schemeType;
  const TMark = marks;
  alert(spec);



  // define the columns we want and their titles

  const tableColumn = ["No", "Criteria", "Marks", "Marking"];

  // define an empty array of rows

  const tableRows = [];



  // for each ticket pass all its data into an array

  let no = 0;

  report.forEach(report => {

    no++;

    const reportData = [

      no,
      report.des,
      report.mark,



      // called date-fns to format the date on the report

     // format(new Date(report.updated_at), "yyyy-MM-dd")

    ];

    // push each tickcet's info into a row

    tableRows.push(reportData);

  });




  // startY is basically margin-top
  var img = new Image()
  img.src = 'https://res.cloudinary.com/sliit-yasantha/image/upload/v1653753258/bg-marking_gkgvjz.png'
  doc.addImage(img, 'png', 10, 10, 180, 50)

  //doc.autoTable(tableColumn, tableRows, { startY: 70 });

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    headerStyles: {
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
      fillColor: [168, 168, 168],
    },
    bodyStyles: {
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
      fillColor: [255, 255,255],
  },
  startY: 70
  });

  const date = Date().split(" ");

  // we use a date string to generate our filename.

 // const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  // ticket title. and margin-top + margin-left

  //doc.text("Marking Scheme", 80, 15);
  doc.text(Type, 80, 50);
  doc.setFontSize(10);
  doc.text("This is the marking guidelines for "+Type+". You will be evaluated according to this. " , 15, 60, );
  doc.text("Total marks allocated for this assesment : "+TMark, 15, 64 );
  doc.text("Please refer the 'Research Management Tool' for further details.", 15, 68 );


  // we define the name of our PDF file.

  doc.save(`report_.pdf`);

};



export default generatePDF;