


import Button from './Button';


const From = ({ reqType, setReqType }) => {

  return (
    <form onSubmit={(e) => e.target.preventDefault()} >

      <Button
        buttonText='users'
        reqType={reqType}
        setReqType={setReqType}
      />

      <Button
        buttonText='comments'
        reqType={reqType}
        setReqType={setReqType}
      />

      <Button
        buttonText='posts'
        reqType={reqType}
        setReqType={setReqType}
      />

    </form>

  )
}


export default From;