import express from 'express';
import { HolidayNotFoundError, ForbiddenError } from '../errors/errors';

const router = express.Router();

router.get('/:ibge/:ano-:mes-:dia', async(req, res) => {
    try {

        res.status(200).json({
            message: "Segue o fluxo..."
        });
    } catch (err) {
        if (err instanceof HolidayNotFoundError) {
            return res.status(404).send();
        }

        return res.status(500).send();
    }
});

router.put('/:ibge/:mes-:dia', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        if (err instanceof HolidayNotFoundError) {
            return res.status(404).send();
        }

        if (err instanceof ForbiddenError) {
            return res.status(403).send();
        }
        res.status(500).send();
    }
});

router.delete('/:ibge/:mes-:dia', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});


router.put('/:ibge/:chaveFeriado', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

router.delete('/:ibge/:chaveFeriado', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

export default router;