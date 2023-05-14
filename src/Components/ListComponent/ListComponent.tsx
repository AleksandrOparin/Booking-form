import { forwardRef } from 'react';

import ListComponentProps from './ListComponentProps';
import './ListComponent.css';

const ListComponent = forwardRef<HTMLUListElement, ListComponentProps>(
    ({ listClassName, itemClassName, selectedItem, selectedClassName, items, onItemClick }, _ref) => {
        return (
            <ul className={`list ${listClassName}`}>
                {items.map((item) => (
                    <li
                        key={item.value}
                        className={`list__item ${itemClassName} ${item.value === selectedItem && selectedClassName}`}
                        onClick={() => onItemClick(item.value)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
);

export default ListComponent;
