type customInputStyle = {
   btn: {
      backgroundColor: string,
      marginTop: number,
      borderRedius: number,
    };
   paper: any;
 };

const customInputStyle = {
 btn: {
    backgroundColor: "black",
    marginTop: 20,
    borderRedius: 2,
    border: "2px solid black",
    "&:hover":{
         backgroundColor: "white",
         color: "black",
         border: "2px solid black"
      }
  },
 paper: {
   boxShadow: "none",
   backgroundColor: "transparent",
   margin:"auto",
   height: "100%", 
   width: "100%",
 },
 TextField:{
   backgroundColor: "white"
 }
};

export default customInputStyle;