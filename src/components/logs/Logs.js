import React,{useEffect} from 'react'
import LogItem from '../logs/LogItem'
import PreLoader from '../layout/PreLoader'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getLogs} from '../../actions/LogActions'

const Logs = ({log:{logs,loading},getLogs}) => {
    useEffect(() =>{
        getLogs()
    },[getLogs])

    if(loading || logs===null){
        return <PreLoader/>
    }

    return (
       <ul className="collection with-header">
           <li className="collection-header">
               <h4 className="center">System Logs</h4>
           </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs To Display...</p>) :(
                logs.map(log => <LogItem log={log} key={log.id}/>)
            )}
       </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    log:state.log,
    getLogs: PropTypes.func.isRequired
})

export default connect(mapStateToProps,{getLogs})(Logs);
