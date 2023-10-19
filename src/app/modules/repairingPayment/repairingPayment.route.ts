import express from 'express';
import { RepairingPaymentController } from './repairingPayment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();
router.post(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  RepairingPaymentController.insertIntoDB
);
router.get('/', RepairingPaymentController.getAllFromDB);
router.delete('/:id', RepairingPaymentController.deleteFromDB);

export const RepairingPaymentRoute = router;
