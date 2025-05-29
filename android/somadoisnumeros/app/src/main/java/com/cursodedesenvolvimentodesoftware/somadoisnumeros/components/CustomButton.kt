package com.cursodedesenvolvimentodesoftware.somadoisnumeros.components

import android.widget.Toast
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.Green
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.White

@Composable
fun CustomButton(
    onClick: () -> Unit
){
    Button(
        onClick = {
            onClick()
        },
        colors = ButtonDefaults.buttonColors(
            containerColor = Green,
            contentColor = White
        ),
        modifier = Modifier.fillMaxWidth()
    ) {
        Text("Somar")
    }
}