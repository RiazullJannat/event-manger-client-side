import { NavLink } from "react-router";

const Category = () => {
    const categories = [
        { name: 'Music', icon: '🎵' },
        { name: 'Sports', icon: '🏟️' },
        { name: 'Tech', icon: '💻' },
        { name: 'Business', icon: '💼' },
        { name: 'Art', icon: '🎨' },
        { name: 'Film', icon: '🎬' },
        { name: 'Food', icon: '🍽️' },
        { name: 'Health', icon: '🧘' }
    ];
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
                🎯 Explore by Category
            </h2>
            <p className="text-center text-while mb-10 max-w-2xl mx-auto">
                Discover events that match your interests. Choose a category and dive into excitement!
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {categories.map((cat, i) => (
                    <NavLink to={`events/${cat.name.toLowerCase()}`}>
                        <div
                            key={i}
                            className="p-6 bg-base-200 rounded-xl shadow-md hover:shadow-xl text-center transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
                        >
                            <div className="text-4xl mb-2">{cat.icon}</div>
                            <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default Category;