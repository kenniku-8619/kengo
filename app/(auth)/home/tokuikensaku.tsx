const shumis=[
                "スポーツ",
                "観戦",
                "鑑賞",
                "旅行",
                "料理",
                "グルメ",
                "アウトドア",
                "植物を育てる",
                "動物を育てる",
                "音楽",
                "美容",
                "芸術",
                "ダンス",
                "ゲーム",
                "読書"]

export function Tokuikensaku(){
    return(
        <div className="bg-lime-300 px-2 flex flex-col items-center">
            <h1>得意検索</h1>
            <select name="" className="border bg-white">
                {shumis.map((shumi,index) =>{return(<option key={index}>{shumi}</option>)})}
            </select>
            <div>
                <button className="bg-gray-300 m-1 px-5">検索</button>
            </div>
        </div>
    )
}