import React from 'react'
// import axios from 'axios'
import Form from './Form'
import './App.css'

// const baseUrl = process.env.PORT || 4000

const url = process.env.DATABASE_URL || 'https://agile-fortress-33580.herokuapp.com';
const baseUrl = url

class App extends React.Component {
  state = {
    channels: [],
    channel: 'first'
  }

  // stream = new EventSource('http://localhost:4000/stream')
  stream = new EventSource(`${baseUrl}/stream`)

  componentDidMount () {
    this.stream.onmessage = event => {
      const { data } = event

      const action = JSON.parse(data)
      console.log('action test:', action)

      const { type, payload } = action

      if (type === 'ALL_CHANNELS') {
        this.setState({ channels: payload })
      }

      if (type === 'ONE_CHANNEL') {
        const channels = [
          ...this.state.channels,
          payload
        ]

        this.setState({ channels })
      }
    }
  }

  pick = (name, id) => {
    this.setState({
      channel: name,
      channelId: id
    })
  }

  render () {
    console.log('render state test:', this.state)
    const buttons = this
      .state
      .channels
      .map(channel => <button
        key={channel.id}
        onClick={
          () => this.pick(
            channel.name,
            channel.id
          )
        }
      >
        {channel.name}
      </button>)

    const channel = this
      .state
      .channels
      .find(channel => 
        channel.name === this.state.channel
      )

    const paragraphs = channel
      ? channel
      .messages
        .map(message => <p
          key={message.id}
        >
          {message.text}
        </p>)
      : null

    return <div className="App">
      <h1>Chattery chat chat app</h1>
      <Form
        resource='channel'
        field='name'
      />

      <Form 
        resource='message'
        field='text'
        channelId={this.state.channelId}
      />

      {buttons}

      {paragraphs}
    </div>
  }
}

export default App;