import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from './data.json';

class main extends React.Component {
    render() {
        return ( <
            main >
            <
            > {
                this.props.data.map((post, indx) => {
                    return ( <
                        HornedBeasts url = { post.image_url }
                        title = { post.title }
                        description = { post.description }
                        keyword = { post.keyword }
                        horns = { post.horns }
                        key = { indx }
                        showthepost = { this.props.showHandle }
                        />
                    );
                })
            } <
            /> < /
            main >
        );
    }
}
export default main;