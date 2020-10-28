import TransmitterAdapter from './TransmitterAdapter';
import TransmitterAPI from './TransmitterAPI';

class CommunicationController {
    communicate() {
        const trasmitter = new TransmitterAdapter(new TransmitterAPI());
        trasmitter.transmit(1, 7);
        console.log('communicate');
    }
}

export default CommunicationController;
