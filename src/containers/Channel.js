import React from 'react';
import { connect } from 'react-redux';
import { Creators as TodoActions } from "../react-redux/redux/news";

let Channel = ({ channelString, channelName, setDisabled, onClick, active }) => (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="channel-button" onClick={() => { onClick(channelName); setDisabled(false); }}
            style={{ backgroundColor: active === channelName ? 'orange' : '' }}>
            <p>{channelString}</p>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    active: state.news.channelName
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (channelName) => dispatch(TodoActions.selectChannel(channelName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
