// const college={

// PRNNO : 10001,
// CLGNAME :"JSPM",
// CLGTYPE : "AFFILATED",
// LOCATION : "PUNE"
// }


class college{
    constructor(PRNNO,CLGNAME,CLGTYPE,LOCATION)
    {
    this.CLGNAME=CLGNAME;
    this.PRNNO=PRNNO;
    this.CLGTYPE=CLGTYPE;
    this.LOCATION=LOCATION;
    
    }
    Details(){
    console.log(this.CLGNAME,this.PRNNO,this.CLGTYPE,this.LOCATION);
    }
    }
    
    let JSPM = new college("JSPM",1001,"unipune","PCMC");
    let PCCOE = new college("PCCOE",1002,"unipune","wakad");
    let FC = new college("FC",1003,"unipune","swarget");
    let Modern = new college("Modern",1004,"unipune","shivajinagar");
     
    JSPM.Details();
    PCCOE.Details();
    FC.Details();
    Modern.Details();
    