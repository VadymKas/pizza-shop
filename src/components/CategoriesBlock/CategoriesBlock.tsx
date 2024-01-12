import { memo } from "react";

type CategoryType = {
    value: number;
    onChangeCategory: (idx: number) => void;
};

const Categories: React.FC<CategoryType> = ({ value, onChangeCategory }) => {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    return (
        <div className='categories'>
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onChangeCategory(index)}
                        className={value === index ? 'active' : ''}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Categories);
