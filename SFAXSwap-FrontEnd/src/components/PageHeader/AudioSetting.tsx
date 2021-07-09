import React from 'react'
import { useAudioModeManager } from 'state/user/hooks'
import { Box, Flex, Text, useMatchBreakpoints } from '../../libraries/pancake-toolkit-master/packages/pancake-uikit/src/index'

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{translateString(999, 'Audio')}</Text>
      </Flex>
      <Box/>
    </Box>
  )
}

export default AudioSetting
