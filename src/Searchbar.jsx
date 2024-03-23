import {Header,Form,Input,Button} from './Searchbar.styled'
const Searchbar=({onSubmit,inputCh})=>{
    return(
        <Header className="searchbar">
            <Form onSubmit={onSubmit} className="form">
                <Button type="submit" className="button"><span className="button-label">Search</span></Button>
                <Input onChange={(e)=>{inputCh(e.target.value)}} className="input" type="text" placeholder="Search images and photos" autoComplete="off" autoFocus/>
            </Form>
        </Header>
    )
}
export default Searchbar
