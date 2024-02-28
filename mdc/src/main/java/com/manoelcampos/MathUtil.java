package com.manoelcampos;

/**
 * @author Manoel Campos
 */
public class MathUtil {
    // complexidade ciclomatica
    public static int mdc(int a, int b){
        if (b > 0 && a % b == 0) return b;
        if (b == 0){
            return Math.abs(a);
        }

        return -1;
    }

    public static int dividir(int a, int b){
        return a / b;
    }


}
