package com.manoelcampos;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MathUtilTest {

    @Test
    void mdcigual(){
        final int a = 6, b = 2;
        final int obtido = MathUtil.mdc(a,b);
        final int esperado = MathUtil.mdc(b,a);
        assertEquals(esperado, obtido);
        System.out.println(obtido+", mas o esperado era "+esperado);
    }
    // a divisao eh o resto
}