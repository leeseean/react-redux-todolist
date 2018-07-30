import React from "react";
import {connect} from "react-redux";
import {addItem, setValue, setFinshTime} from '../store/actions';
const AddItem = ({valueToAdd, finishTime, dispatch}) => {
    return (
        <div className="add-item">
            <span className="add-item-text-wrapper">内容：<input
                className="add-item-text"
                value={valueToAdd}
                type="text"
                onChange={(e) => dispatch(setValue(e))}/></span>
            <span className="add-item-time-wrapper">计划完成时间：<input
                className="add-item-finish-time"
                value={finishTime}
                type="datetime-local"
                onChange={(e) => dispatch(setFinshTime(e))}/></span>
            <input
                className="add-item-button"
                type="button"
                value="添加"
                onClick={() => dispatch(addItem(valueToAdd, finishTime))}/>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {valueToAdd: state.valueToAdd, finishTime: state.finishTime};
};

export default connect(mapStateToProps)(AddItem);