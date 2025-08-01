const Contact = () => {
    return (
        <div className="contact_page">
            <h1 className="font-bold p-2 m-2">contact us </h1>
            <form>
                <input type="text" className="border-black border p-2 m-2 bg-gray-50 rounded-md" placeholder="name"/>
                <input type="text" className="border-black border p-2 m-2 bg-gray-50 rounded-md" placeholder="message"/>
                <button className="border-black border p-2 m-2 bg-gray-50 rounded-md">
                    submit
                </button>
            </form>
        </div>
    )
}

export default Contact; 