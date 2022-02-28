import { Checkbox } from './checkbox';

export const Display = ({ itemList }) => {

    return(
        <div className="container">
            <h4>Todo list</h4>
            {itemList.map(item => {
                return(
                    <div className="row">
                        <div className="col s6">
                            <ul className="collection with-header">
                                <li className="collection-item" key={item.id}>
                                    <Checkbox />
                                    <div>
                                        {item.content}
                                        <a href={`${item.id}`} className="secondary-content">edit</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}