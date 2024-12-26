const Contact =()=>{
    return(
 <div>
    <h1 className="font-bold text-3xl p-4 m-4 justify-center text-center">Contact Us Page</h1>
    <form className="bg-white shadow-2xl p-4 m-4 w-auto justify-center text-center">
      <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
      <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
      <button type="submit" className="border border-black p-2 m-2 rounded-lg">Submit</button>
    </form>
 </div>
    )
}
export default Contact;