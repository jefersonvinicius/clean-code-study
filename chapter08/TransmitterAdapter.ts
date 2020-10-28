import ITransmitter from './ITransmitter';
import TransmitterAPI from './TransmitterAPI';

class TransmitterAdapter implements ITransmitter {
    private adaptee: TransmitterAPI;

    constructor(transmitter: TransmitterAPI) {
        this.adaptee = transmitter;
    }

    async transmit(frequency: number, flow: number) {
        this.adaptee.badTransmitterMethod(frequency, flow);
    }
}

export default TransmitterAdapter;
