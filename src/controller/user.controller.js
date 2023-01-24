export let userGet = (req, res) => {
    let { id } = req.params
    console.log(req)
    id = +id
    if (id > 0 && id <= 10) {
        res.status(200).send(`Hello ${id}`)
    } else {
        res.status(400).send("Something went wrong")
    }
}

export let userUpdate = (req, res) => {
    let { id } = req.params
    id = +id
    if (id > 0 && id <= 10) {
        res.status(200).send(`Account of ${id} has been updated`)
    } else {
        res.status(400).send("Something went wrong")
    }
}

export let userCreate = (req, res) => {
    let { username } = req.body
    return res.status(200).send(`${username}, your account has been created`)
}
