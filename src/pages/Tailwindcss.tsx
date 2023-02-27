import * as D from'../data';

export default function Tailwindcss(){
    return (
        <div className="bg-black/50 p-4 shadow-sm" >
            <p className="w-full py-4 text-3xl text-white shadow-sm">Tailwind CSS</p>
            <p className="italic text-sky-200 line-clamp-3 shadow-sm">{D.randomParagraphs(10)}</p>
            <button className="bg-sky-500/100 btn btn-primary shadow-sm" style={{textTransform:'none'}}>my Button</button>
            <button className="btn w-64 rounded-full ">Button</button>
        </div>
    );
}