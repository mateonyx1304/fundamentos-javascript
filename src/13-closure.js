// Closure

function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            saldo += cantidad;
            return `Depositado $${cantidad}. Saldo actual: $${saldo}`
        },
        retirar(cantidad) {
            if (cantidad > saldo) {
                return `Fondos Insuficientes`
            }
            saldo -= cantidad;
            return `Retirado $${cantidad}. Saldo Actual $${saldo}`
        },
        consultarSaldo() {
            return `Saldo $${saldo}.`
        }
    }
}

const miCuenta = crearCuentaBancaria(1000);
console.log(miCuenta.consultarSaldo());
console.log(miCuenta.depositar(500));
console.log(miCuenta.retirar(200));

const miCuenta2 = crearCuentaBancaria(200);
console.log(miCuenta2.consultarSaldo());