import React from 'react';
import InputSelect from './InputSelect';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDifficult: true,
            showFun: true
        }

        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(name, state) {
        // console.log('name', name, 'state', state)

        if (name === 'difficult') {
            this.setState(() => {
                return {
                    showDifficult: state
                }
            })
        } else if (name === 'fun') {
            this.setState(() => {
                return {
                    showFun: state
                }
            })
        }
    }

    render() {
        const renderDifficultBar = (showDifficult) => {
            if (showDifficult) {
                return (
                    <VictoryBar
                        colorScale={"red"}
                        data={this.props.studentData}
                        x="assignment"
                        y="difficult"
                    />
                )
            }
        }

        const renderFunBar = (showFun) => {
            if (showFun) {
                return (
                    <VictoryBar
                        colorScale={"blue"}
                        data={this.props.studentData}
                        x="assignment"
                        y="fun"
                    />
                )
            }
        }

        return (
            <div className="ChartComponent">
                <div className="InputSelect">
                    <InputSelect
                        selectName={'difficult'}
                        selectText={'Opdracht moeilijk (zalmroze)'}
                        selectChange={this.handleFilterChange}
                    />
                    <br />
                    <InputSelect
                        selectName={'fun'}
                        selectText={'Opdracht leuk (blauw)'}
                        selectChange={this.handleFilterChange}
                    />
                </div>

                <VictoryChart
                    domainPadding={{ x: 15 }}
                    className="VictoryChart-BarChart"
                >
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickFormat={this.props.studentData.assigment}
                        style={{ tickLabels: { angle: 90, textAnchor: 'start', fontSize: 6 } }}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={[1, 2, 3, 4, 5]}
                        style={{ tickLabels: { fontSize: 10 } }}
                    />
                    <VictoryGroup offset={15} style={{ data: { width: 10 } }}>
                        {renderDifficultBar(this.state.showDifficult)}
                        {renderFunBar(this.state.showFun)}
                    </VictoryGroup>
                </VictoryChart>
                <div className="ComponentInfo">
                    <p className="fun">Hoe leuk was de opdracht</p>
                    <p className="difficult">Hoe moeilijk was de opdracht</p>
                </div>
            </div>
        )
    }
}

export default ChartComponent;