package com.cursodedesenvolvimentodesoftware.somadoisnumeros.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.Green
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.White

@Composable
fun CustomButton(
    onClick: () -> Unit,
    label: String,
    containerColor : Color,
    contentColor : Color
) {
    Button(
        onClick = {
            onClick()
        },
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
//        modifier = Modifier.fillMaxWidth()
    ) {
        Text(
            text = label
        )
    }
}