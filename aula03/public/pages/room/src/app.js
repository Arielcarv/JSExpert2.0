const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

    const socketUrl = 'http://localhost:3000'
    const socketBuilder = new SocketBuilder({ socketUrl })

    // new Peer(undefined, {
    //   port: 9000,
    //   host: 'localhost',
    //   path: '/'
    // })

    const peerConfig = Object.values({
      id: undefined,
      config: {
        port: 9000,
        host: 'localhost',
        path: '/'
      }
    })


    const peerBuilder = new PeerBuilder({ peerConfig })

    const view = new View()
    const media = new Media()
    const deps = {
      view,
      media,
      room,
      socketBuilder,
      peerBuilder
    }

      // view.renderVideo({ userId: 'test01', url:'https://media.giphy.com/media/m91DNUufzXEhrnUlJ5/giphy.mp4'})
      // view.renderVideo({ userId: 'test02', isCurrentId: true, url:'https://media.giphy.com/media/m91DNUufzXEhrnUlJ5/giphy.mp4'})
      // view.renderVideo({ userId: 'test03', url:'https://media.giphy.com/media/m91DNUufzXEhrnUlJ5/giphy.mp4'})
    Business.initialize(deps)
}

window.onload = onload