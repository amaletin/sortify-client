import * as React from "react";
import * as ReactDOM from "react-dom";


interface AlbumProps {
  album: any
}
const Album: React.SFC<AlbumProps> = (album: any) => <div>{album.name}</div>;

class Index extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render () {
    return (
      <div>
        {this.albums.map((a: any) => <Album album={a} />)}
      </div>
    );
  }
};


const container: Element = document.getElementById("index")

ReactDOM.render(<Index />, container);
