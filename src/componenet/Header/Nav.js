import React,{Component} from 'react'
import "./Header.css"
class Nav extends Component {
    render(){
    return (
        <div>
    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.Url}>{this.props.name} {this.props.img}</a></li>
        </div>
    )
}
}

export default Nav
