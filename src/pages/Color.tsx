export default function Color(){
    return (
        <div className="hover:bg-sky-600 p-4 bg-sky-700 hover:text-blue-200">
            <p className="w-full p-4 text-3xl text-white ">Color!!!</p>
            <div className="mb-4 ">
                <p className="text-white" >Email Address</p>
                <input type="email" className="text-gray-900 px-2 border-sky-200 border-4 rounded-full" ></input>
                <p className="text-rose-500 " >this field is required</p>
            </div>
        </div>
    );
}