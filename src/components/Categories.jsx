import React from 'react';


const Categories = React.memo(function Categories({activeCategory,items, onClickCategory}) {
    
        
        return (
            <div className="categories">
                  <ul>
                    <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)} 
                    >Все</li>
                    { items &&                
                    items.map((name, index) =>  (
                        <li
                        onClick={() => onClickCategory(index)} 
                        key={index}
                        className={activeCategory === index ? 'active' : ''}
                        >
                        {name}       
                        </li> 
                        ))               
                    }              
                  </ul>
                </div>
        );
    }
)

export default Categories;