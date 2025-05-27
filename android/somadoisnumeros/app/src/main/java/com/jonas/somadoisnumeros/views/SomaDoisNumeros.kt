package com.jonas.somadoisnumeros.views

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.modifier.modifierLocalMapOf
import androidx.compose.ui.unit.dp

@Composable()
fun SomaDoisNumeros(
    modifier: Modifier,
){
    Column (
        modifier = modifier
    ){
        Text(
            text = "Calculadora",
        )

        OutlinedTextField(
            value = "",
            onValueChange = {},
            label = { Text("Digite um número: ")},
            modifier = Modifier.padding(8.dp, 20.dp).fillMaxWidth(),
        )
        OutlinedTextField(
            value = "",
            onValueChange = {},
            label = { Text("Digite outro número: ")},
            modifier = Modifier.padding(8.dp, 20.dp).fillMaxWidth(),
        )
    }

}