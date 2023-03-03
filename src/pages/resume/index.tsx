import PdfViewer from "../../components/PDFViewer"
import styled from '@emotion/styled'
import { ContentCard } from "../../utils"

const ResumeContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
})

const ResumeCard = styled(ContentCard)({
  width: '100%',
  backgroundColor: 'rgb(82,86,89)',
});

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeCard>
        <PdfViewer pdfUrl="/LucasResume.pdf" />
      </ResumeCard>
    </ResumeContainer>
  )
}

export default Resume