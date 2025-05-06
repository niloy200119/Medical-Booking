const getStoredDoc =()=>{
    const storedDocSTR=localStorage.getItem("appointList");

    if(storedDocSTR){
        const storedDocData= JSON.parse(storedDocSTR);
        return storedDocData;
    }
    else{
        return [];
    }
}


const addToSerialDB=(id)=>{

    const storedDocData=getStoredDoc();
    if(storedDocData.includes(id)){
        alert("Already Exists")
    }
    else{
        storedDocData.push(id);
        const data =JSON.stringify(storedDocData);
        localStorage.setItem("appointList",data)
    }
}

export {addToSerialDB,getStoredDoc};