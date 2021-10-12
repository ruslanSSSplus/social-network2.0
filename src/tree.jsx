import React from "react";
const FILE = 'TEST/FILE';
const FOLDER = 'TEST/FOLDER';

class Row extends React.Component {

    setName = (name, path) => {
        this.props.setName(name, path);
    };

    render() {
        console.log('render')
        return (

            <div>
                <input value={ this.props.data.name}  onChange={e => this.setName(e.target.value, this.props.data.name)}/>

                {this.props.data.child === null ? null  :this.props.data.child.map((el) => ( <Row data={el} setName={this.setName} />))}
            </div>
        );
    }
}



class Row2 extends React.Component {



    render() {

        return (
            <span>
            →  {this.props.data.name}
                {this.props.data.child === null ? null  : this.props.data.child.map((el) => ( <Row2 data={el} />))}

            </span>
        );
    }
}

export default class TestTask extends React.Component{
    state = {
           name: "Documents",
           type: FOLDER,
           child: [
               {
                   type: FOLDER,
                   name: "Записки",
                   child: [
                       {
                           type: FOLDER,
                           name: "smth",
                           child: [
                               {
                                   type: FILE,
                                   name: "childOfSmth.js",
                                   child: null
                               },
                               ]
                       } ]
               },
               {
                   type: FILE,
                   name: "Таблицы.xlsx",
                   child: null
               },
               {
                   type: FOLDER,
                   name: "Work",
                   child: [
                       {
                           type: FILE,
                           name: "code.js",
                           child: [
                               {
                                   type: FILE,
                                   name: "code@@@@.js",
                                   child: null
                               }
                           ]
                       }
                   ]
               }
           ]

    };



    setName = (name, path) => {
        let stateCopy = { ...this.state };
        stateCopy.name =  name
        return this.setState(stateCopy);
    };

    render() {
        return (
            <div>
                <h1>Test app</h1>


              <div>
                  <input value={ this.state.name} onChange={e => this.setName(e.target.value)} />
                  { this.state.child.map((el) => (
                      <Row data={el}  setName={this.setName} />
                  ))}
              </div>




                <div>
                   {this.state.name}
                    { this.state.child.map((el) => (
                        <div>
                            {this.state.name}  <Row2 data={el} fat={this.state.name} />
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}
