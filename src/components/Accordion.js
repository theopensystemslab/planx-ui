import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          The footprint of the extended house covers <strong>50%</strong> of the total boundary area
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Conservation Area designation introduces control over the demolition of unlisted property in the area and affords protection to trees. Read more information in <a href="#">Planning Document Section 5</a>
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          The property is near a <strong>conservation area</strong>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Conservation Area designation introduces control over the demolition of unlisted property in the area and affords protection to trees. Read more information in <a href="#">Planning Document Section 5</a>
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          The height of the extension is <strong>12m</strong>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Conservation Area designation introduces control over the demolition of unlisted property in the area and affords protection to trees. Read more information in <a href="#">Planning Document Section 5</a>
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
