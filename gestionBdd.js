/*
if (name.length < 50) {
    let reqName = `SELECT * FROM members WHERE user_name = ${name}`;
    let nameExist = false;
    pool.query(reqName, (err, res) => {
        if (err) console.log(err);
        if (res.rowCount !== 0) {
            nameExist = true;
        }
        if (res.rowCount === 0) {
            nameExist = false;
        }
    })

    if (nameExist === false) {
        if (pseudo.length < 50) {
            let reqPseudo = `SELECT * FROM members WHERE user_name = '${pseudo}'`;
            let pseudoExist = false;
            pool.query(reqPseudo, (err, res) => {
                if (err) console.log(err);
                if (res.rowCount !== 0) {
                    pseudoExist = true;
                }
                if (res.rowCount === 0) {
                    pseudoExist = false;
                }
            })

            if (pseudoExist === false) {
                let reqMail = `SELECT * FROM members WHERE user_name = '${email}'`;
                let mailExist = false;
                pool.query(reqMail, (err, res) => {
                    if (err) console.log(err);
                    if (res.rowCount !== 0) {
                        mailExist = true;
                    }
                    if (res.rowCount === 0) {
                        mailExist = false;
                    }
                })
                if (mailExist === false) {

                }
            } else {
                error = '*Pseudo déjà existant.';
            }
        } else {
            error = '*Pseudo trop long.';
        }
    } else {
        error = '*Nom déjà existant.';
    }
} else {
    error = '*Nom trop long';
}*/
