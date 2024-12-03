import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FileUploader } from '@/components/ui/file-uploader'

export function ImportComponent() {
  const [files, setFiles] = React.useState<File[]>([])
  const { t } = useTranslation()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
          {t('importModule.title')} {files.length > 0 && `(${files.length})`}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{t('importModule.title')}</DialogTitle>
          <DialogDescription>{t('importModule.subtitle')}.</DialogDescription>
        </DialogHeader>
        <FileUploader
          maxFileCount={3}
          maxSize={8 * 1024 * 1024}
          onValueChange={setFiles}
        />
      </DialogContent>
    </Dialog>
  )
}
