import { useState, useEffect } from 'react'

export default function Register(props: {
  onFormSwitch: (arg0: string) => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleAudioPlay = (audioSrc: string) => {
    const audio = new Audio(audioSrc)
    audio.play()
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(email)
  }

  useEffect(() => {
    handleAudioPlay('./Answer-my-question.mp3')
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="JudgeJudy@Judgy.com"
          name="email"
          id="email"
          onClick={() => handleAudioPlay('./lets-start.mp3')}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="WHAT IS YOUR LAST NAME"
          name="password"
          id="password"
          onClick={() => handleAudioPlay('./hows-that.mp3')}
        ></input>
        <label htmlFor="firstname">First name</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="WHAT IS YOUR FIRST NAME"
          name="name"
          id="name"
          onClick={() => handleAudioPlay('./first-name.mp3')}
        ></input>
        <label htmlFor="lastname">Last Name</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="WHAT IS YOUR LAST NAME"
          name="lastname"
          id="lastname"
          onClick={() => handleAudioPlay('./last-name.mp3')}
        ></input>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>
        Create Account
      </button>
    </>
  )
}
