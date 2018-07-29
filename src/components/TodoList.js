import React from "react";
import {connect} from "react-redux";
import {changeStatus, deleteItem} from '../store/actions';
import "../css/Todolist.css";
import AddItem from './AddItem'

const TodoList = ({lists, dispatch}) => {
    return (
        <div className="list-wrap">
            <h1 className="todo-list-title">待办事项</h1>
            <ul className="todo-list">
                {lists.map((item, index) => {
                    const {name, finished, createTime, finishTime} = item;
                    let itemClassName = "clearfix todo-list-item";
                    if (finished) {
                        itemClassName += " finished";
                    }
                    return (
                        <li className={itemClassName} key={index}>
                            <input
                                className="fl item-status"
                                type="checkbox"
                                checked={finished}
                                onChange={() => dispatch(changeStatus(item, index))}/>
                            <span className="fl item-content">
                                {name}
                            </span>
                            <div className="fr clearfix">
                                <span className="fl item-create-time">创建时间：{createTime}</span>
                                <span className="fl item-finish-time">预计完成时间：{finishTime}</span>
                                <span className="fl item-delete" onClick={() => dispatch(deleteItem(index))}>
                                    x
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <AddItem></AddItem>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        lists: state.lists,
    };
};

export default connect(mapStateToProps)(TodoList);
