const Card = ({ activity, type, participants }) => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-red-100 rounded-lg w-60 text-center">
            <p className="bg-white rounded-lg p-1  text-xl">Activity:{activity}</p>
            <p className="bg-white rounded-lg p-1 text-xl">Type:{type}</p>
            <p className="bg-white rounded-lg p-1 text-xl">Participants:{participants}</p>
        </div>
    )
}

export default Card
