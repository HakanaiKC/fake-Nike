import { LanguageIcon } from '../icons/IconSvg'

const footerItems = [
    {
        title: "Resources",
        menu: [
            "Find A Store",
            "Become A Member",
            "Send Us Feedback",
        ]
    },
    {
        title: "Help",
        menu: [
            "Get Help",
            "Order Status",
            "Delivery",
            "Returns",
            "Payment Options",
            "Contact Us",
        ]
    },
    {
        title: "About Nike",
        menu: [
            "About Nike",
            "News",
            "Careers",
            "Investors",
            "Sustainability",
        ]
    },
];

const Footer = () => {
    return (
        <footer>
            <div className="menu-grid p-12 ">
                <div className="grid grid-cols-4 text-sm border-t-gray-300 border-2">
                    {footerItems.map((column, colIndex) => (
                        <ul key={colIndex} className="space-y-2 mt-12">
                            <h4 key={colIndex} className="font-bold text-gray-900 pb-6">
                                {column.title}
                            </h4>
                            {column.menu.map((item, index) =>
                                <li key={index} className="text-gray-500 font-medium">
                                    {item}
                                </li>
                            )}
                        </ul>
                    ))}
                    <span className="inline-flex justify-end mt-12">
                        <LanguageIcon /> Vietnam
                    </span>
                </div>
            </div>

            <div className="p-12 text-gray-600">
                <ul className="flex">
                    <li className="mr-5">© 2024 Nike, Inc. All rights reserved</li>
                    <li className="mr-5">Guides</li>
                    <li className="mr-5">Terms of Sale</li>
                    <li className="mr-5">Terms of Use</li>
                    <li className="mr-5">Nike Privacy Policy</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
