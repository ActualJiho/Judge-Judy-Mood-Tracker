import { useState } from 'react'

export default function Login(props: { onFormSwitch: (arg0: string) => void }) {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const handleAudioPlay = (audioSrc: string) => {
    const audio = new Audio(audioSrc)
    audio.play()
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(email)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setemail(event.target.value)}
          type="email"
          placeholder="WHAT IS YOUR EMAIL"
          name="email"
          onClick={() => handleAudioPlay('./lets-start.mp3')}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="WHAT IS YOUR PASSWORD"
          name="password"
          onClick={() => handleAudioPlay('./what-is-that.mp3')}
        ></input>
        <button>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>
        Sign up here
      </button>
    </>
  )
}
