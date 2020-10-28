interface ITransmitter {
    transmit: (frequency: number, flow: number) => Promise<void>;
}

export default ITransmitter;
