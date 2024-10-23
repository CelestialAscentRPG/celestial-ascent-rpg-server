import { Module } from '@nestjs/common';
import { TransactionManagerService } from './transaction-manager.service';

@Module({
  providers: [TransactionManagerService],
  exports: [TransactionManagerService],
})
export class TransactionManagerModule {}
