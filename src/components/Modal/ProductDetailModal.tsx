import { Modal } from 'antd'
const ProductDetailModal = ({ isModalOpen, setIsModalOpen }:{ isModalOpen:boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={
                <div className="flex items-center space-x-4 p-4">
                    <img
                        src="https://picsum.photos/535/669"
                        alt="Nike Cortez Textile"
                        className="w-[60px] h-[60px]"
                    />
                    <div>
                        <p>Nike Cortez Textile</p>
                        <p>2,929,000₫</p>
                    </div>
                </div>
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className="!h-full !w-full !max-w-[762px] p-12"
        >
            <div className="p-4">
                <h2 className="text-lg font-bold">One word: tradition.</h2>
                <p className="mt-2">
                    From heritage running to a fashion phenom, the Cortez's
                    retro appeal, sponge-soft midsole, and seesaw detailing
                    deliver decade after decade. This iteration combines ribbon
                    lacing and a monochromatic look for elevated style.
                </p>

                <h3 className="text-2xl font-bold mt-6">Benefits</h3>
                <ul className="list-disc pl-5 mt-3 text-base">
                    <li>
                        Textile upper with suede accents provides a comfortable
                        fit that lasts.
                    </li>
                    <li>
                        Foam midsole with iconic wedge insert provides lightweight
                        cushioning.
                    </li>
                    <li>
                        Herringbone outsole pattern pairs durable traction and
                        heritage style.
                    </li>
                    <li>Padded, low-cut collar looks sleek and feels great.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-6">Product details</h3>
                <ul className="list-none pl-5 mt-3 text-base">
                    <li>
                        <strong>Colour Shown:</strong> Medium Soft Pink/Pink
                        Ice/Medium Soft Pink
                    </li>
                    <li>
                        <strong>Style:</strong> FV5420-600
                    </li>
                    <li>
                        <strong>Country/Region of Origin:</strong> Indonesia
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mt-6">Cortez origins</h3>
                <p className="mt-2">
                    The Nike Cortez was designed in 1972 by Nike co-founder Bill
                    Bowerman to be lighter and more comfortable than any other.
                    It quickly became the most popular running shoe in the
                    country and has transformed into an unmistakable icon, woven
                    into pop culture history.
                </p>
            </div>
        </Modal>
    )
}

export default ProductDetailModal
