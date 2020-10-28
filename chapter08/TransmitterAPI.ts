class TransmitterAPI {
    async badTransmitterMethod(frequency: number, flow: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(frequency, flow);
                resolve();
            }, 2000);
        });
    }
}

export default TransmitterAPI;
