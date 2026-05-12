export default function BookItem({ image, title, author }) {
    return (
        <div className="flex gap-3 items-start">

            <img
                src={image}
                alt="Book image"
                className="w-16 h-20 object-cover rounded-md shrink-0"
            />

            <div className="flex flex-col">

                <h3 className="text-sm font-medium leading-5 text-white">{title}</h3>

                <p className="text-sm text-gray-400 mt-1">{author}</p>

            </div>

        </div>
    );
}